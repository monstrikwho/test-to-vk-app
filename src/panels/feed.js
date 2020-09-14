import React from "react";
import {
  PanelHeader,
  CardGrid,
  Card,
  Group,
  Progress,
  Button,
  Text,
} from "@vkontakte/vkui";

import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";
import Icon24LikeOutline from "@vkontakte/icons/dist/24/like_outline";
import Icon24CommentOutline from "@vkontakte/icons/dist/24/comment_outline";
import Icon24ShareOutline from "@vkontakte/icons/dist/24/share_outline";
import Icon24View from "@vkontakte/icons/dist/24/view";

class FeedPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PanelHeader>Новости</PanelHeader>
        <div
          className="feed-content"
          style={{ height: "calc(100vh - 57px - 80px)", overflowY: "scroll" }}
        >
          <CardGrid>
            <Group
              separator="hide"
              style={{
                padding: "8px 0",
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
                <img
                  src="https://sun1.cosmostv-by-minsk.userapi.com/6NHxVFTP-zqB1Y0Opv5BrT5fDzyh1mRS6hegGg/14vUObFJGiE.jpg?ava=1"
                  alt="img"
                  width="44px"
                  height="44px"
                  style={{ borderRadius: "50%", marginRight: "8px" }}
                />
                <div>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "20px",
                      color: "#2C2D2E",
                    }}
                  >
                    Матвей Правосудов
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",
                      color: "#818C99",
                    }}
                  >
                    час назад
                  </div>
                </div>
              </div>
              <div>
                <Icon24MoreHorizontal />
              </div>
            </Group>
            <Text weight="regular">
              Сейчас самое время помочь тем, кто не может попросить о помощи
              сам.
            </Text>
            <Card
              mode="shadow"
              style={{ width: "100%", borderRadius: "10px" }}
              onClick={() => {
                this.props.changePanel("post");
              }}
            >
              <img
                src="https://i.picsum.photos/id/866/360/140.jpg?hmac=-qJPcSJ-e90O2Q2Hv6yOeU9AeRtqrjPmM6-rYlaL3Jg"
                alt="pic"
                width="100%"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Group separator="show" style={{ padding: "0 12px" }}>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    marginTop: "8px",
                  }}
                >
                  Добряши помогают котикам
                </div>
                <div style={{ fontSize: "13px", color: "#818C99" }}>
                  Матвей Правосудов · Закончится через 5 дней
                </div>
              </Group>
              <div
                className="collection-status"
                style={{ padding: "8px 12px", display: "flex" }}
              >
                <div style={{ flexGrow: "1", marginRight: "12px" }}>
                  <div style={{ fontSize: "13px" }}>
                    Собрано 8 750 ₽ из 10 000 ₽
                  </div>
                  <Progress value={87} style={{ marginTop: "8px" }} />
                </div>
                <Button mode="outline">Помочь</Button>
              </div>
            </Card>

            <div
              className="offers"
              style={{
                width: "calc(100% - 28px)",
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
          </CardGrid>

          <CardGrid>
            <Group
              separator="hide"
              style={{
                padding: "8px 0",
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
                <img
                  src="https://sun1.cosmostv-by-minsk.userapi.com/6NHxVFTP-zqB1Y0Opv5BrT5fDzyh1mRS6hegGg/14vUObFJGiE.jpg?ava=1"
                  alt="img"
                  width="44px"
                  height="44px"
                  style={{ borderRadius: "50%", marginRight: "8px" }}
                />
                <div>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "20px",
                      color: "#2C2D2E",
                    }}
                  >
                    Матвей Правосудов
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",
                      color: "#818C99",
                    }}
                  >
                    час назад
                  </div>
                </div>
              </div>
              <div>
                <Icon24MoreHorizontal />
              </div>
            </Group>
            <Text weight="regular">
              Сейчас самое время помочь тем, кто не может попросить о помощи
              сам.
            </Text>
            <Card
              mode="shadow"
              style={{ width: "100%", borderRadius: "10px" }}
              onClick={() => {
                this.props.changePanel("post");
              }}
            >
              <img
                src="https://i.picsum.photos/id/866/360/140.jpg?hmac=-qJPcSJ-e90O2Q2Hv6yOeU9AeRtqrjPmM6-rYlaL3Jg"
                alt="pic"
                width="100%"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Group separator="show" style={{ padding: "0 12px" }}>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    marginTop: "8px",
                  }}
                >
                  Добряши помогают котикам
                </div>
                <div style={{ fontSize: "13px", color: "#818C99" }}>
                  Матвей Правосудов · Закончится через 5 дней
                </div>
              </Group>
              <div
                className="collection-status"
                style={{ padding: "8px 12px", display: "flex" }}
              >
                <div style={{ flexGrow: "1", marginRight: "12px" }}>
                  <div style={{ fontSize: "13px" }}>
                    Собрано 8 750 ₽ из 10 000 ₽
                  </div>
                  <Progress value={87} style={{ marginTop: "8px" }} />
                </div>
                <Button mode="outline">Помочь</Button>
              </div>
            </Card>

            <div
              className="offers"
              style={{
                width: "calc(100% - 28px)",
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
          </CardGrid>
        </div>

        <div
          className="actions"
          style={{
            height: "80px",
            width: "100%",
          }}
        >
          actions
        </div>
      </React.Fragment>
    );
  }
}

export default FeedPanel;
