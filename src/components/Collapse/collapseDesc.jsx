function CollapseDesc({ title, description }) {
  return (
    <div>
      <div>
        <span>{title}</span>
        <p>chevron bas</p>
        <p>chevron haut</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CollapseDesc
