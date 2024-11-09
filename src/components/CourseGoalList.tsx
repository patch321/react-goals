import { ReactNode } from 'react';
import { type CourseGoal as Goal } from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type CourseGoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode='hint'>No goals found. Maybe add one?</InfoBox>;
  }

  let warningBox: ReactNode = null;

  if (goals.length === 4) {
    warningBox = (
      <InfoBox mode='warning' severity={'low'}>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  } else if (goals.length === 5) {
    warningBox = (
      <InfoBox mode='warning' severity={'medium'}>
        You have a few goals already. Keep going!
      </InfoBox>
    );
  } else if (goals.length >= 6) {
    warningBox = (
      <InfoBox mode='warning' severity={'high'}>
        You have a lot of goals. Maybe focus on just a few?
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal onDelete={onDeleteGoal} id={goal.id} title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
