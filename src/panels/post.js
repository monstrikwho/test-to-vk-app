import React from "react";
import {
  Group,
  PanelHeaderBack,
  Progress,
  Text,
  Button,
  Input,
} from "@vkontakte/vkui";

import Icon24LikeOutline from "@vkontakte/icons/dist/24/like_outline";
import Icon24CommentOutline from "@vkontakte/icons/dist/24/comment_outline";
import Icon24ShareOutline from "@vkontakte/icons/dist/24/share_outline";
import Icon24View from "@vkontakte/icons/dist/24/view";

class Post extends React.Component {
  componentDidMount() {
    document.querySelector(".Progress__in").textContent = "8 750 ₽";
    document.querySelector(".Progress__bg").textContent = "10 000 ₽";
  }

  render() {
    return (
      <React.Fragment>
        <div className="post-content">
          <div className="cover">
            <PanelHeaderBack
              onClick={() => {
                this.props.changePanel("feed");
              }}
            />
            <img
              src="https://i.picsum.photos/id/866/360/140.jpg?hmac=-qJPcSJ-e90O2Q2Hv6yOeU9AeRtqrjPmM6-rYlaL3Jg"
              alt="img"
              height="140px"
              width="100%"
            />
          </div>
          <Group separator="show">
            <div className="title">Добряши помогают котикам</div>
            <div className="author">Автор Матвей Правосудов</div>
            <div className="deadline">Сбор закончится через 5 дней</div>
          </Group>

          <Group separator="show">
            <div className="plan">Нужно собрать до 10 сентября</div>
            <div className="progress-bar">
              <Progress value={65} />
            </div>
          </Group>

          <Group separator="show">
            <Text>
              <div>Привет-привет, добряш!</div> <br />
              <div>
                Я создал это событие, чтобы показать какие у меня прекрасные
                добряши и буду счастлив, если получится вдохновить кого-нибудь
                хотя бы на маленький перевод в пользу фонда Юна.
              </div>{" "}
              <br />
              <div>
                Если получится собрать 1 000 рублей, то это будет 5 обработанных
                животных от блох и клещей.
              </div>{" "}
              <br />
              <div>
                Собранные 5 000 рублей превратятся в 25 кг корма для подопечных
                фонда.
              </div>{" "}
              <br />
              <div>
                А 10 000 рублей позволят провести курс занятий с кинологом по
                социализации сложной собаки. Чтобы она легче нашла свой дом.
              </div>{" "}
              <br />
              <div>
                В благотворительности не бывает маленьких сумм, поэтому если вы
                хотите помочь, то переведите любую сумму, будь-то 10 рублей или
                1000
              </div>
            </Text>
          </Group>

          <Group separator="show">
            <div
              className="offers"
              style={{
                width: "100%",
                padding: "14px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Icon24LikeOutline /> 65
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Icon24CommentOutline /> 65
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Icon24ShareOutline /> 4
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Icon24View /> 7,2K
              </div>
            </div>
          </Group>

          <div className="comments">
            <div className="comment">
              <div className="user">
                <img
                  src="https://sun1.cosmostv-by-minsk.userapi.com/6NHxVFTP-zqB1Y0Opv5BrT5fDzyh1mRS6hegGg/14vUObFJGiE.jpg?ava=1"
                  alt="12"
                  width="36px"
                  height="36px"
                />
                <div>
                  <div className="name">
                    Алексей Мазелюк <span>5 мин</span>
                  </div>
                  <div className="message">Отправил.</div>
                </div>
              </div>
              <Icon24LikeOutline />
            </div>

            <div className="comment">
              <div className="user">
                <img
                  src="https://sun1.cosmostv-by-minsk.userapi.com/6NHxVFTP-zqB1Y0Opv5BrT5fDzyh1mRS6hegGg/14vUObFJGiE.jpg?ava=1"
                  alt="12"
                  width="36px"
                  height="36px"
                />
                <Input type="text" placeholder="Комментарий" />
              </div>
            </div>
          </div>
        </div>

        <Group
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "calc(100% - 24px)",
            backgroundColor: "#fff",
            paddingBottom: "12px",
            borderTop: "1px solid #D7D8D9",
          }}
        >
          <div className="collection-status" style={{ display: "flex" }}>
            <div style={{ flexGrow: "1", marginRight: "12px" }}>
              <div style={{ fontSize: "14px" }}>
                Собрано 8 750 ₽ из 10 000 ₽
              </div>
              <Progress value={87} style={{ marginTop: "8px" }} />
            </div>
            <Button mode="outline">Помочь</Button>
          </div>
        </Group>
      </React.Fragment>
    );
  }
}

export default Post;
