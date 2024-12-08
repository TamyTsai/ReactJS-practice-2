import ChildComponent from "./ChildComponent"

// 用函式創建組件
// 會回傳HTML元素的函式就是組件（會回傳東西的副程式為函數）
function App() {
  return (
    // <div>hello world</div> // JSX, JavaScript XML 可以讓你在JavaScript中寫HTML
    // <div><MyComponent></MyComponent></div>
    // react組件 或 HTML元素 本質上都是JS物件，只不過被JSX語法包裹起來
    // 執行時，Vite的編譯工具會將這些JSX語法轉換為JS物件，
    // 之後React會將這些JS物件轉換為HTML元素（ReactDOM.createRoot(document.getElementById('root')).render()）
    // 因此瀏覽器才能顯示

    // 組件不一定要寫成對標籤，可以只寫一個標籤，但要加上斜線，代表關閉標籤，否則會發生語法錯誤
    // <div><MyComponent/></div>
    // 組件名稱開頭一定要是大寫（Pascal Case：將每一個單詞的開頭大寫），以利React區分 組件 及 HTML元素
    // MyComponent組件 被寫在 App組件 中，所以 MyComponent組件 是 App組件 的 子組件，App組件 為 父組件
    // 父子組件會形成樹狀結構，組件跟HTML元素一樣有父子概念

    // 可以重複使用組件
    // 網頁上常常會有重複的UI介面，所以就可以透過將其寫到組件裡，降低程式碼的重複性及可維護性
    <div>
      <MyComponent/>
      <MyComponent/>
      <MyComponent/>
    </div>

    // 如果將 一個組件定義 寫進 另一個組件定義 裡（比如將function MyComponent() 寫到 App()中），
    // 雖然不會發生錯誤，但會讓React變得非常慢，還會出現奇怪的bug
    // function MyComponent() {
    //   return <h1>你好</h1>
    // }
  )
}

// 組件雖然可以些在這裡，但更常見的作法 是將 每個組件 寫成 一個檔案（模組化），透過導出與導入來結合
// 可以讓檔案變得整齊好管理
// function MyComponent() {
//   return <h1>你好</h1>
// }

function MyComponent() {
  return <ChildComponent/>
  // 打子組件名，按下tab，就會自動在檔案最上面引入所需模組（import ChildComponent from "./ChildComponent"）
}

export default App // 將檔案組件導出去，在main.jsx使用（import App from './App.jsx'）
