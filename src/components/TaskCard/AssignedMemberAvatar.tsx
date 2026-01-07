import useStore from '../../store';
import AvatarBase from '../ui/avatar';

const AssignedMemberAvatar = ({ memberId }: { memberId: string }) => {
    const member = useStore(state => state.membersById[memberId]);
    return (
        <AvatarBase src={member.avatar} alt={member.email} fallback={member.name} />
    );
}

export default AssignedMemberAvatar;
