import profileImg from '../../assets/img/profile.jpg';
export function ProfileImage() {
  return (
    <div className="shrink-0 w-40 h-40 overflow-hidden rounded-full">
      <img className="object-cover" src={profileImg} alt="profile" />
    </div>
  );
}
