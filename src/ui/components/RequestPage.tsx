function RequestPage() {
  return (
    <>
      <div style={{ flexDirection: 'column', padding: '30px', paddingTop: '0px', height: '100%' }}>
        <div style={{ height: '70%' }}>
          <div style={{ height: '20%' }}>
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', height: '70%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <form>
                <input type="radio" /> <label>none</label>
                <input type="radio" /> <label>form-data</label>
                <input type="radio" /> <label>x-www-form-urlencoded</label>
                <input type="radio" /> <label>raw</label>
                <input type="radio" /> <label>binary</label>
                <input type="radio" /> <label>GraphQL</label>
              </form>
              <h6>Coockies</h6>
            </div>
            <div style={{ height: '80%' }}>
              <textarea style={{ height: '100%', width: '100%', textAlign: 'start' }} />
            </div>
          </div>
        </div>
        <div style={{ height: '30%' }}>
          <div style={{ flexDirection: 'row' }}>
            <h6>response page</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestPage
