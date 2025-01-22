'use client'

import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function TestPage() {
  const [testResult, setTestResult] = useState<string>('')

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
      setTestResult(JSON.stringify({ auth: data, db: testData }, null, 2))
    } catch (error) {
      console.error('Connection error:', error)
      setTestResult('Error: ' + (error instanceof Error ? error.message : String(error)))
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Supabase Connection Test</h1>
        <Button onClick={testConnection}>Test Connection</Button>
        {testResult && (
          <pre className="p-4 bg-gray-100 rounded-lg overflow-auto">
            {testResult}
          </pre>
        )}
      </div>
    </main>
  )
} 