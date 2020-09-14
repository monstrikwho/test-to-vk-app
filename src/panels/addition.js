import React from "react";
import {
  PanelHeader,
  PanelHeaderBack,
  FormLayout,
  FormLayoutGroup,
  Select,
  Radio,
  Button, Input
} from "@vkontakte/vkui";

class AdditionPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PanelHeader
          left={
            <PanelHeaderBack
              onClick={() => {
                this.props.changePanel("collection-form");
              }}
            />
          }
        >
          Дополнительно
        </PanelHeader>
        <FormLayout>
          <FormLayoutGroup top="Автор">
            <Select defaultValue="f">
              <option value="f">Матвей Правосудов</option>
              <option value="m">first</option>
            </Select>
          </FormLayoutGroup>
          <FormLayoutGroup top="Сбор завершится">
            <Radio name="radio" value="1" defaultChecked>
              Когда соберем сумму
            </Radio>
            <Radio name="radio" value="2">
              В определенную дату
            </Radio>
          </FormLayoutGroup>
          <FormLayoutGroup top="Дата окончания">
            <Input type='date' placeholder='Выберите дату' />
          </FormLayoutGroup>
          <Button mode="primary" size="xl" onClick={() => {
            this.props.changePanel('create-post')
          }}>
            Создать сбор
          </Button>
        </FormLayout>
      </React.Fragment>
    );
  }
}

export default AdditionPanel;
