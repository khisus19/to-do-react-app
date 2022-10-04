import ReactDOM from "react-dom";
import "../styles/Modal.css"

export default function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal">
      {props.children}
    </div>
    ,
    document.getElementById("modal-root")
  )
}