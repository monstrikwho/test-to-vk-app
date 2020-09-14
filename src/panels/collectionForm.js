import React from "react";
import {
  PanelHeader,
  PanelHeaderBack,
  FormLayout,
  FormLayoutGroup,
  Input,
  Textarea,
  Select,
  File,
  Button,
} from "@vkontakte/vkui";
import Icon28PictureOutline from "@vkontakte/icons/dist/28/picture_outline";

class CollectionForm extends React.Component {
  render() {
    const target =
      this.props.actPanelHeader.getTitle() === "Регулярный сбор" ? true : false;
    return (
      <React.Fragment>
        <PanelHeader
          left={
            <PanelHeaderBack
              onClick={() => {
                this.props.changePanel("type-collection");
              }}
            />
          }
        >
          {this.props.actPanelHeader.getTitle()}
        </PanelHeader>
        <FormLayout>
          <File
            before={<Icon28PictureOutline />}
            controlSize="xl"
            mode="outline"
          >
            Загрузить обложку
          </File>
          <FormLayoutGroup top="Название сбора">
            <Input type="text" placeholder="Название сбора" />
          </FormLayoutGroup>
          <FormLayoutGroup top="Сумма, ₽">
            <Input
              type="text"
              placeholder={
                target ? "Сколько нужно в месяц?" : "Сколько нужно собрать?"
              }
            />
          </FormLayoutGroup>
          <FormLayoutGroup top="Цель">
            <Input
              type="text"
              placeholder={
                target
                  ? "Например, поддержка приюта"
                  : "Например, лечение человека"
              }
            />
          </FormLayoutGroup>
          <FormLayoutGroup top="Описание">
            <Textarea placeholder="На что пойдут деньги и как они кому-то помогут?" />
          </FormLayoutGroup>
          <FormLayoutGroup top="Куда получать деньги">
            <Select defaultValue="f">
              <option value="f">Счёт VK Pay · 1234</option>
              <option value="m">first</option>
            </Select>
          </FormLayoutGroup>
          {target ? (
            <FormLayoutGroup>
              <Select defaultValue="f">
                <option value="f">Матвей Правосудов</option>
                <option value="m">first</option>
              </Select>
            </FormLayoutGroup>
          ) : (
            ""
          )}
          <Button mode="primary" size="xl" onClick={() => {
            this.props.changePanel((target) ? 'create-post' : 'addition')
          }}>
            {target ? "Создать сбор" : "Далее"}
          </Button>
        </FormLayout>
      </React.Fragment>
    );
  }
}

export default CollectionForm;
