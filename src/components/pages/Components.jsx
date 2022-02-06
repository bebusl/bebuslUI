import Modal from "../components/modal";
import Loader from "../components/loader";
import Texteditor from "../components/Texteditor";

export default function Components() {
  return (
    <div>
      <h1>만든 컴포넌트 모음</h1>
      <br />
      <div>
        <h2>텍스트에디터</h2>
        <Texteditor></Texteditor>
      </div>
      <div>
        <h2>모달</h2>
        <div>
          <Modal></Modal>
        </div>
      </div>
      <div>
        <h2>로딩바</h2>
        <div>
          <Loader></Loader>
        </div>
      </div>
    </div>
  );
}
