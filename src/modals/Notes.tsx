import './Notes.scss'

interface NotesProps {
    onCloseNotes : () => void
}

const Notes:React.FC<NotesProps> = (props) => {
    const {onCloseNotes} = props
    return (
        <>
           <h4>Notes</h4>
           <div className='notesBox' >
               {/* <label htmlFor="task">
               <input type="checkbox" id='task' name='task' checked/>
               </label> */}
           </div>
           <button className="cancelBtn" onClick={onCloseNotes}>
        cancel
      </button>
      <button className="saveBtn"> save </button>
  
        </>
    );
};

export default Notes;