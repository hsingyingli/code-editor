import { createClient } from '@supabase/supabase-js'

const api_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ""

const supabase = createClient(url, api_key)


export default supabase
