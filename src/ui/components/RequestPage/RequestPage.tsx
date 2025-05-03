import LowerTab from "./LowerTab"
import ResponseTab from "./ResponseTab"
import UpperTab from "./UpperTab"

function RequestPage() {
  return (
    <>
      <div style={{ flexDirection: 'column', padding: '30px', paddingTop: '0px', height: '100%' }}>
        <div style={{ height: '70%' }}>
          <div style={{ height: '25%' }}>
            <UpperTab />
          </div>
          <div style={{ height: '70%' }}>
            <LowerTab />
          </div>
        </div>
        <div style={{ height: '30%' }}>
          <ResponseTab />
        </div>
      </div>
    </>
  )
}

export default RequestPage
