import CollapseList from '../../components/Collapse/collapseList'
import CollapseDesc from '../../components/Collapse/collapseDesc'

const objectDesc = {
  title: 'Description',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
const objectList = [
  'objet #1',
  'objet #2',
  'objet #3',
  'objet #4',
  'objet #5',
  'objet #6',
]

function Lodging() {
  return (
    <div>
      <div>
        <p>Futur carroussel de photos</p>
      </div>
      <div>
        <div>
          <h1>Titre du logement</h1>
          <p>Ville, Régions</p>
          <p>container de tag</p>
        </div>
        <div>
          <p>Notation</p>
          <p>Nom Prénom</p>
          <p>image</p>
        </div>
      </div>
      <div>
        <CollapseDesc
          title={objectDesc.title}
          description={objectDesc.description}
        />
        <CollapseList array={objectList} />
      </div>
    </div>
  )
}

export default Lodging
