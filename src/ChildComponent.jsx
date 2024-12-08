// 常見的作法 是將 每個組件 寫成 一個檔案（模組化）
// 按照慣例（React沒有強制規定），組件名稱 與 檔案名稱 會取相同名字
function ChildComponent() {
    return <h2>我是子組件</h2>
}

// 導出組件
export default ChildComponent;