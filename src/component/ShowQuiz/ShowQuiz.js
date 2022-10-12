import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./showquiz.css";

const ShowQuiz = ({ quizQuestion }) => {
  const { question, correctAnswer, options } = quizQuestion;
  // const ans = options.find((realAns) => realAns === correctAnswer);
  // const [isTrue, setIsture] = useState(correctAnswer);

  // const questionAns = (e) => {
  //   if (isTrue) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  //   setIsture(correctAnswer);
  // };

  return (
    <>
      <ToastContainer />

      <div className="question-container">
        <div className="question-item">
          <h5 className="text-center">Quiz:{question}</h5>

          <i className="fa-regular fa-eye"></i>
        </div>
        <div className="ms-5">
          {options.map((x) => (
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  {x}
                </label>
              </div>
            </div>
          ))}
          {/* <button onClick={(e) => questionAns(e)}>
            {" "}
            {quizQuestion.options[0]}
          </button>
          <br />
          <button onClick={(e) => questionAns(e)}>
            {" "}
            {quizQuestion.options[1]}
          </button>
          <br />
          <button onClick={(e) => questionAns(e)}>
            {" "}
            {quizQuestion.options[2]}
          </button>
          <br />
          <button onClick={(e) => questionAns(e)}>
            {" "}
            {quizQuestion.options[3]}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default ShowQuiz;
