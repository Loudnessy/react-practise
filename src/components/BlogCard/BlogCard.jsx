import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';
import {formatter} from '../../service/service'
export const BlogCard = ({poster, tag, title, description, name, avatar, postedAt}) => {
  return <Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt={tag}
    />
  </CardHeader>
  <CardBody>
    <Tag>{tag}</Tag>
    <CardTitle>{title}</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt={name} />
      <UserInfo>
        <UserName>{name}</UserName>
        <Date>{formatter(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
};
