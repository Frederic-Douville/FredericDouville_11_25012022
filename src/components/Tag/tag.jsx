import '../../utils/Style/tag.css';

function Tag({ content, key }) {
    return (
        <div className="tag-ctn" key={key}>
            {content}
        </div>
    );
}

export default Tag;
