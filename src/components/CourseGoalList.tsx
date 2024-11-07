import { type CourseGoal as Goal } from '../App';
import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal onDelete={onDeleteGoal} id={goal.id} title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
