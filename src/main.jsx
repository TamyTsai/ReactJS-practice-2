import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // 導入App.jsx所輸出的組件（export default App）

// React將JS物件轉換為HTML的過程
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* App組件是最上層的組件，所以叫做「根組件」 */}
  </React.StrictMode>,
)
