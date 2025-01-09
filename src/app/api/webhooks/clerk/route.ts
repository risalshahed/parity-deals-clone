import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { env } from '@/data/env/server'
import { db } from '@/drizzle/db'
import { UserSubscriptionTable } from '@/drizzle/schema'
import { createUserSubscription } from '@/server/db/subscription'
import { deleteUser } from '@/server/db/users'

export async function POST(req: Request) {

  // Get headers
  const headerPayload = await headers()
  const svixId = headerPayload.get('svixId')
  const svixTimestamp = headerPayload.get('svixTimestamp')
  const svixSignature = headerPayload.get('svixSignature')

  // If there are no headers, error out
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create new Svix instance with secret
  const wh = new Webhook(env.CLERK_WEBHOOK_SECRET)

  let event: WebhookEvent

  // Verify payload with headers
  try {
    event = wh.verify(body, {
      'svixId': svixId,
      'svixTimestamp': svixTimestamp,
      'svixSignature': svixSignature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  switch (event.type) {
    case 'user.created':
      console.log('hi nigah!');
      /* await db.insert(UserSubscriptionTable)
        .values */
      await createUserSubscription({
        clerkUserId: event.data.id,
        tier: "Free"
      })
      break;

      case 'user.deleted':
        if(event.data.id != null) {
          await deleteUser(event.data.id)
        }
        break
        
  }

  return new Response('Webhook received', { status: 200 })
}