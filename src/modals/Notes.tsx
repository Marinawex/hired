import './Notes.scss'

interface NotesProps {
    onCloseNotes : () => void
}

const Notes:React.FC<NotesProps> = (props) => {
    const {onCloseNotes} = props
    return (
        <>
           <h4>Notes</h4>
           <div className='notesBox' ></div>
           <button className="cancelBtn" onClick={onCloseNotes}>
        cancel
      </button>
      <button className="saveBtn"> save </button>
  
        </>
    );
};

export default Notes;