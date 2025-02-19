import { createClient } from 'next-sanity'

export const client = createClient({
  projectId:"jo7hy6y8",
  dataset:"production",
  apiVersion:"2025-01-03",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skPbemw4TaJcxSmTyn3GVMAVgnrUm6Zy7UfCjwO4SdKeVyEN96RcMl1qvytt4kMSWYOvGcycukWRopm2B1cmk7yMRecHTedGdLfVmG7AJLI0DATgxsuRWcQY57EGMwJp8eNLa6souNWzZKJn8hre0Bbwlr1q7EV84I93YSMh7Yv8B7MsDl3t"
})
