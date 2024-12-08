import ChildComponent from "./ChildComponent";
import './App.css';

// 用函式創建組件
// 會回傳HTML元素的函式就是組件（會回傳東西的副程式為函數）
function App() {

  // const text = 'hello world';

  // const handleClick = () => {
  //   alert('按到了')
  // };
  // 也可以將此 回呼函數 寫到 組件 外面，或另一個 檔案 裡
  // 不過最常見的寫法，還是在 組件 中，直接定義 回呼函數

  // 除了單純執行回呼函數外，瀏覽器 還會把 事件物件（物件內含有 滑鼠座標、點擊的按鈕等等），傳入到 回呼函數 中
  // const handleClick = (e) => {
  //   console.log(e);
  // };

  // JSX中的陣列
  // const listItems = [
  //   <MyComponent/>,
  //   <MyComponent/>,
  //   <MyComponent/>,
  // ]
  // 可以在 JSX檔案 的其他地方寫 HTML，不一定要 寫在 return 的 後面
  // 因為到頭來，這裡的 組件 或 元素，也只是JS物件而已，所以可寫在任何地方
  // 瀏覽器警告：標籤中的每個內容應該要有key屬性（警告表示程式存在潛藏的問題，但仍然可以執行，只是放著不管，之後可能會演變成錯誤）
  // const listItems = [
  //   <MyComponent key="0"/>,
  //   <MyComponent key="1"/>,
  //   <MyComponent key="2"/>,
  // ]
  // 每個元素 的 key屬性的值 都要 不同
  // key屬性的用途 是 讓 React可以 精準定位 陣列中 每個 元素，進而提昇 渲染效率

  // 兩個常見的陣列方法：map()、filter()
  // map方法可以讓你將一個陣列，轉換為另一個陣列
  const listItems = [
    {content: '張三', id: 'abc'},
    {content: '李四', id: 'xyz'},
    {content: '王五', id: 'qaz'},
  ];

  // filter可以讓你過濾陣列
  // 若要過濾 李四
  // filter方法會回傳過濾後的陣列
  const filterItems = listItems.filter((item) => {
    if (item.content !== '李四') {
      return true
      // 在filter方法邏輯中，若回呼函數回傳true，則 該筆資料 會被 保留下來
      // 回傳false或 沒有回傳資料 的話，該筆資料就會被剔除
    }
  })

  return (
    // <div>hello world</div> // JSX, JavaScript XML 可以讓你在JavaScript中寫HTML
    // <div><MyComponent></MyComponent></div>
    // react組件 或 HTML元素 本質上都是 JS物件，只不過被 JSX語法 包裹起來
    // 執行時，Vite的 編譯工具 會將這些 JSX語法 轉換為 JS物件，
    // 之後React會將這些JS物件轉換為HTML元素（ReactDOM.createRoot(document.getElementById('root')).render()）
    // 因此瀏覽器才能顯示
    // react組件、JSX語法        >         JS物件                                 >                                     HTML元素
    //                   Vite的 編譯工具          React（ReactDOM.createRoot(document.getElementById('root')).render()）

    // 組件不一定要寫成對標籤，可以只寫一個標籤，但要加上斜線，代表關閉標籤，否則會發生語法錯誤
    // <div><MyComponent/></div>
    // 組件名稱開頭一定要是大寫（Pascal Case：將每一個單詞的開頭大寫），以利React區分 組件 及 HTML元素
    // MyComponent組件 被寫在 App組件 中，所以 MyComponent組件 是 App組件 的 子組件，App組件 為 父組件
    // 父子組件會形成樹狀結構，組件跟HTML元素一樣有父子概念

    // 可以重複使用組件
    // 網頁上常常會有重複的UI介面，所以就可以透過將其寫到組件裡，降低程式碼的重複性及可維護性
    // <div>
    //   <MyComponent/>
    //   <MyComponent/>
    //   <MyComponent/>
    // </div>

    // 如果將 一個組件定義 寫進 另一個組件定義 裡（比如將function MyComponent() 寫到 App()中），
    // 雖然不會發生錯誤，但會讓React變得非常慢，還會出現奇怪的bug
    // function MyComponent() {
    //   return <h1>你好</h1>
    // }

    // 每個組件只能回傳一個元素，不能同時回傳多個元素
    // <MyComponent/>
    // <MyComponent/>
    // <MyComponent/>
    // 以上程式碼會產生 語法錯誤（App函式（組件）return的內容有三個元素）

    // 若要回傳多個元素，要將多個元素包進一個元素中
    // 會有這樣的規定，並非JSX的關係，而是JS本身的語法限制
    // 因為這裡的每個HTML元素，都是組件，其實就是JS物件而已
    // 而在JS中，你不能同時回傳多個物件，只能回傳一個物件
    // <div>
    //   <MyComponent/>
    //   <MyComponent/>
    //   <MyComponent/>
    // </div>
    // 但這裡這個div元素除了 包裹其他元素 外，沒有其他功能，會在HTML中，形成多餘的元素
    // 所以React允許我們可以只留外殼，就不會有多餘的HTML元素
    // 所以只是要 包裹其他元素 的話，就用空標籤即可
    // <>
    //   <MyComponent/>
    //   <MyComponent/>
    //   <MyComponent/>
    // </>
    // 空標籤也是JS物件，稱做Fragment

    <>
      {/* 在HTML中，空元素的斜線可有可無，但在JSX中，空元素必須要有斜線 */}
      {/* 所以以下這行會出錯 */}
      {/* <input type="text"> */}

      {/* 要在HTML中寫JS，要加大括弧 */}
      {/* <h1>{text}</h1> */}

      {/* 不只可以寫變數，還可以寫函數 */}
      {/* <h1>{text.toUpperCase()}</h1> */}

      {/* 還可以在 元素 屬性的值 中使用JS */}
      {/* <input type="text" placeholder={text}/> */}
      {/* 基本上在JSX中，只有 標籤內的內容，與 標籤屬性的值，可以寫JS */}
      {/* 以下這行會產生語法錯誤（將JS語法寫在 屬性名稱 中） */}
      {/* <input type="text" {text}={text}/> */}
      {/* 以下這行也會產生語法錯誤（將JS語法寫在 標籤名稱 中） */}
      {/* <{text} type="text" placeholder={text}/> */}

      {/* 有些 屬性名稱 在HTML與JSX中不同 */}
      {/* HTML中的 class，在JSX寫作 className */}
      {/* <h1 className="h1-tag">{text}</h1> */}
      {/* 上面這行程式碼的「className」，在HTML會轉為「class」 */}
      {/* <h1 class="h1-tag">HELLO WORLD</h1> */}
      {/* 因為「class」在JS中為關鍵字，所以JSX就將class改為className */}
      {/* 另外因為「for」在JS中也是關鍵字，所以HTML的for屬性，在JSX改寫為「htmlFor」 */}
      {/* JSX寫HTML屬性名稱時，使用駝峰式命名法（第一個單詞開頭小寫，其他單詞開頭大寫） */}

      {/* 使用雙大括弧的語法，只是在JSX中使用物件 */}
      {/* 常出現在style屬性中 */}
      {/* <h1 style={{backgroundColor: 'red'}}>{text}</h1> */}
      {/* 雙大括弧 非單一語法，而是由兩個語法組成 */}
      {/* 外層大括弧，表示我們要在JSX中使用JS */}
      {/* 裡面的大括弧 代表物件 */}
      {/* 裡面的大括弧 中的 東西，並非真正的CSS語法，是利用 JS物件 來模擬 CSS 的 一種方式 */}
      {/* 在CSS中，屬性值 不需要像這裡一樣加上引號（''） */}
      {/* CSS中，屬性名 會用「-」來隔開單詞（background-color），而非像 此處使用 駝峰式命名法 */}
      {/* CCS寫法：{background-color: red;} */}
      {/* 直接在HTML裡寫CSS的方式，稱為inline CSS，更常見的方法，是使用獨立的CSS檔案 */}
      {/* 創建App.css檔案，寫入樣式，然後於此檔頂部引入此模組，即可套用樣式 */}
      {/* 在正常的JS檔案中，其實是不能導入CSS檔案的 */}
      {/* 這裡可以這樣做的原因是，Vite會把你所導入的CSS檔案，插入到HTML中，因此你才可以導入CSS */}

      {/* 事件處理 */}
      {/* <button onClick={()=>{alert('按到了')}}>我是按鈕</button> */}
      {/* 當用戶點擊按鈕時，執行callback function回呼函數 */}
      {/* <button onClick={handleClick}>我是按鈕</button> */}
      {/* 將回呼函數 寫到 變數 裡，這裡直接寫 變數名，代表函數本體，瀏覽器會等到事件觸發時（用戶Click）時，才呼叫並執行函數 */}
      {/* 回呼函數 後面如果加了圓括弧，就會變成主動執行，變成用戶還沒Click就執行了 */}
      {/* 這是JS本身的特性，與React無關 */}
      {/* <button onClick={handleClick()}>我是按鈕</button> */}

      {/* 除了單純執行回呼函數外，瀏覽器 還會把 事件物件，傳入到 回呼函數 中 */}

      {/* JSX中的陣列 */}
      {/* {listItems} */}
      {/* 在JSX中放入陣列，React也可以將其變成HTML */}

      {/* 兩個常見的陣列方法：map()、filter() */}
      {/* map方法可以讓你將一個陣列，轉換為另一個陣列 */}
      {/* {listItems.map((item) => {
        return <div key={item.id}>{item.content}</div>
      })} */}
      {/* item代表 陣列中 的 每個單一元素，也可以取成 其他名字 */}
      {/* map方法 會給 陣列中的每一筆資料 作循環，item參數就是每一次循環的資料，也就是陣列中的每一筆物件 */}
      {/* map方法會回傳一個新陣列 */}

      {/* filter可以讓你過濾陣列 */}
      {filterItems.map((item) => {
        return <div key={item.id}>{item.content}</div>
      })}
    </>
  )

  // return旁的 圓括弧 很重要，
  // return
  //   <>
  //     <MyComponent/>
  //     <MyComponent/>
  //     <MyComponent/>
  //   </>
  // 如果沒了圓括弧，return底下的程式碼不會被執行
  // 因為單獨一行的return關鍵字是有意義的，代表 讓函數 停止執行，所以return下面的程式碼不會被執行
  // 此為JS的語法特性，與React無關

  // 如果不用圓括弧，那就把標籤寫在return旁邊，就能回傳
  // return <>
  //   <MyComponent/>
  //   <MyComponent/>
  //   <MyComponent/>
  // </>
}

// 組件雖然可以些在這裡，但更常見的作法 是將 每個組件 寫成 一個檔案（模組化），透過導出與導入來結合
// 可以讓檔案變得整齊好管理
// function MyComponent() {
//   return <h1>你好</h1>
// }

function MyComponent() {
  return <ChildComponent/>
  // 打子組件名，按下tab，就會自動在檔案最上面引入所需模組（import ChildComponent from "./ChildComponent"）
  // App（根組件）> MyComponent > ChildComponent
}

export default App // 將檔案組件導出去，在main.jsx使用（import App from './App.jsx'）
