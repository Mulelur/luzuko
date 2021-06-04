import React from "react";
import { Expertise } from "../../components";
import { MMData } from "../../data/mmData";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Content>
        <Expertise.Text>
          I Nogula Luzuko, I am a student at VUT who is so busy studying a field
          of engineering which is elecrical engineering(power).
        </Expertise.Text>
        <Expertise.Text>
          On the other side I have my own personal project which I am doing
          related to the innovation of an electric skateboard.
        </Expertise.Text>
        <Expertise.Text>
          I also like to play football and commit myselt with my school work
        </Expertise.Text>
      </Expertise.Content>
      <Expertise.MMTitle>Manegment Matrix</Expertise.MMTitle>
      <Expertise.MM>
        {MMData.map((item) => {
          return (
            <>
              <Expertise.MMBedge>{item.day}</Expertise.MMBedge>
              <Expertise.MMContent>
                <Expertise.MMText>{item.task}</Expertise.MMText>
              </Expertise.MMContent>
            </>
          );
        })}
      </Expertise.MM>
    </Expertise>
  );
}
