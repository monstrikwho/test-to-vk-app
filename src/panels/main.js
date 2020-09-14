import React from "react";
import { PanelHeader, Button, Group } from "@vkontakte/vkui";

class MainPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PanelHeader>Пожертвования</PanelHeader>
        <div className="center-xy">
          <Group>
            <div>У вас пока нет сборов.</div>
            <div>Начните доброе дело.</div>
            <Button
              mode="primary"
              onClick={() => {
                this.props.changePanel("type-collection");
              }}
            >
              Создать сбор
            </Button>
          </Group>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPanel;
