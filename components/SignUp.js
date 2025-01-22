import { supabase } from '../lib/supabaseClient'

async function signUp(email, password) {
  try {
    // Log the attempt
    console.log('Attempting signup with:', email)

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      // Optional: Add additional user data
      options: {
        data: {
          full_name: 'John Doe', // if you want to add additional data
        }
      }
    })

    if (error) {
      console.error('Signup error:', error.message)
      return { error: error.message }
    }

    console.log('Signup successful:', data)
    return { data }

  } catch (error) {
    console.error('Unexpected error:', error.message)
    return { error: error.message }
  }
}

async function debugSignUp(email, password) {
  // 1. Pre-signup check
  console.log('Starting signup process...')
  
  // 2. Verify Supabase client
  if (!supabase) {
    console.error('Supabase client not initialized')
    return
  }
  
  try {
    // 3. Attempt signup
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    // 4. Log full response
    console.log('Signup response:', {
      data: data,
      error: error,
      user: data?.user,
      session: data?.session
    })
    
    // 5. Check database directly
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
    
    console.log('Database check:', {
      userData,
      userError
    })
    
    return { data, error }
    
  } catch (error) {
    console.error('Signup process error:', error)
    return { error }
  }
}

// Check these in your supabaseClient.js
console.log('SUPABASE_URL:', supabase.auth.getSession().then(data => data.data.user.user_metadata.supabase_url)) // Should match your project URL
console.log('SUPABASE_KEY exists:', !!supabase.auth.getSession().then(data => data.data.user.user_metadata.supabase_anon_key)) // Should be true 