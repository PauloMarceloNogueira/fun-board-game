import React, { useEffect, useState } from "react";
import { QuestionsArr } from "../../Constants/Questions";
import { useUser } from "../../State";
import { Types } from "../../State/User/User.schemas";
import Buttons from "../Buttons/Buttons.component";
import { Modal } from "../Modal/Modal.component";
import { AvailabeSteps } from "../../Constants/Board";
export const QuestionsComponent: React.FC = () => {
  const [userState, dispathUser] = useUser();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (QuestionsArr.find((q) => q.position === userState[0].position)) {
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userState]);
  const validateAnswer = () => {
    if (
      QuestionsArr.find((q) => q.position === userState[0].position)?.answer ===
      value
    ) {
      setOpen(false);
      setValue("");
      let newPosition =
        AvailabeSteps[AvailabeSteps.indexOf(userState[0].position) + 1];
      dispathUser({
        type: Types.changePosition,
        payload: {
          id: 0,
          position: newPosition,
        },
      });
    } else {
      setOpen(false);
      setValue("");
      dispathUser({
        type: Types.changePosition,
        payload: {
          id: 0,
          position: userState[0].position - 1,
        },
      });
    }
  };
  const Question = () => (
    <div>
      <Modal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      >
        <div style={{ wordBreak: "break-word", lineHeight: 1.5 }}>
          {
            QuestionsArr.find((q) => q.position === userState[0].position)
              ?.question
          }
        </div>
        <input
          placeholder="resposta"
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
          autoFocus={true}
          value={value}
          type="text"
        />
        <Buttons type="Primary" handleClick={() => validateAnswer()}>
          <h4>Validar resposta</h4>
        </Buttons>
      </Modal>
    </div>
  );
  return <Question />;
};
