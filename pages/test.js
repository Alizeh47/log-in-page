import { supabase } from '@/lib/supabase'

// Add this function to your component
async function testConnection() {
  try {
    const { data, error } = await supabase.auth.getSession()
    console.log('Connection test:', data, error)
    
    // Test a simple query
    const { data: testData, error: testError } = await supabase
      .from('users')
      .select('*')
      .limit(1)
    
    console.log('Database test:', testData, testError)
  } catch (error) {
    console.error('Connection error:', error)
  }
} 