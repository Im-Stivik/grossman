function LowerTab() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
        <textarea style={{ height: '80%', width: '100%', textAlign: 'start' }} />
      </div>
    </>
  )
}

export default LowerTab
