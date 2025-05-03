function UpperTab() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>
          <h6>basic info</h6>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <h6>save</h6>
          </div>
          <div>
            <h6 style={{ marginLeft: '2px' }}>share</h6>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <input style={{ width: '86%', height: '40px' }} />
        <button style={{ width: '10%' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h6 style={{ margin: '3px' }}>Params</h6>
        <h6 style={{ margin: '3px' }}>Athorization</h6>
        <h6 style={{ margin: '3px' }}>Headers</h6>
        <h6 style={{ margin: '3px' }}>Body</h6>
        <h6 style={{ margin: '3px' }}>Scripts</h6>
        <h6 style={{ margin: '3px' }}>Settings</h6>
      </div>
    </>
  )
}

export default UpperTab
