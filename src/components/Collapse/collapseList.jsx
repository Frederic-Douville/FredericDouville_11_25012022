function CollapseList({ array }) {
  return (
    <div>
      <div>
        <span>Equipements</span>
        <p>chevron bas</p>
        <p>chevron haut</p>
      </div>
      <div>
        <ul>
          {array.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CollapseList
