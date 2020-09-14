import React from "react";
import {
  PanelHeader,
  FormLayout,
  FormLayoutGroup,
  Textarea,
  Group,
  Progress,
  Button,
  CardGrid,
  Card,
  CardScroll,
} from "@vkontakte/vkui";
import Icon16Dropdown from "@vkontakte/icons/dist/16/dropdown";
import Icon28ArrowUpOutline from "@vkontakte/icons/dist/28/arrow_up_outline";
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";
import Icon24User from "@vkontakte/icons/dist/24/user";
import Icon24Recent from "@vkontakte/icons/dist/24/recent";

class CreatePost extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PanelHeader>Публикация</PanelHeader>
        <Group separator="show">
          <div className="fake-header">
            <div className="PanelHeader__left">
              <Icon16Cancel
                onClick={() => {
                  this.props.changePanel("feed");
                }}
              />
            </div>
            <div className="PanelHeader__content">
              Матвей <Icon16Dropdown />
            </div>
            <div className="PanelHeader__right">
              <Icon28ArrowUpOutline
                onClick={() => {
                  this.props.changePanel("feed");
                }}
              />
            </div>
          </div>
        </Group>

        <FormLayout>
          <FormLayoutGroup>
            <Textarea placeholder="Напишите пару строк о сборе.." />
          </FormLayoutGroup>
        </FormLayout>

        <CardGrid>
          <Card mode="shadow" style={{ width: "100%", borderRadius: "10px" }}>
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
                <div style={{fontSize: '13px'}}>Помогите первым</div>
                <Progress value={0} style={{ marginTop: "8px" }} />
              </div>
              <Button mode="outline">Помочь</Button>
            </div>
          </Card>
        </CardGrid>

        <CardScroll style={{ marginTop: "15px" }}>
          <Card size="s" mode="outline">
            <div
              style={{
                padding: '5px',
                display:'flex',
                alignItems: 'center',
                fontWeight: "600",
                fontSize: "11px",
                lineHeight: "14px",
                textTransform: "uppercase",
                color: "#818C99",
              }}
            >
              <Icon24User /> Видно всем <Icon16Dropdown />
            </div>
          </Card>
          <Card size="s" mode="outline">
            <div
              style={{
                padding: '5px',
                display:'flex',
                alignItems: 'center',
                fontWeight: "600",
                fontSize: "11px",
                lineHeight: "14px",
                textTransform: "uppercase",
                color: "#818C99",
              }}
            >
              <Icon24Recent /> Сейчас <Icon16Dropdown />
            </div>
          </Card>
          <Card size="s" mode="outline">
            <div
              style={{
                padding: '5px',
                display:'flex',
                alignItems: 'center',
                fontWeight: "600",
                fontSize: "11px",
                lineHeight: "14px",
                textTransform: "uppercase",
                color: "#818C99",
              }}
            >
              Тематика <Icon16Dropdown />
            </div>
          </Card>
        </CardScroll>
      </React.Fragment>
    );
  }
}

export default CreatePost;
