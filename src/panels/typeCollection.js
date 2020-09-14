import React from "react";
import {
  PanelHeader,
  PanelHeaderBack,
  Group,
  Button,
  CardGrid,
  Card,
} from "@vkontakte/vkui";

import Icon28TargetOutline from "@vkontakte/icons/dist/28/target_outline";
import Icon28ChevronRightOutline from "@vkontakte/icons/dist/28/chevron_right_outline";

class TypeCollection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PanelHeader
          left={
            <PanelHeaderBack
              onClick={() => {
                this.props.changePanel("main");
              }}
            />
          }
        >
          Тип сбора
        </PanelHeader>

        <div className="center-xy">
          <Group
            separator="hide"
            onClick={() => {
              this.props.changePanel("collection-form");
              this.props.actPanelHeader.changeTitle("Целевой сбор");
            }}
          >
            <CardGrid>
              <Card>
                <div
                  style={{
                    display: "flex",
                    padding: "12px 16px",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Icon28TargetOutline style={{ marginRight: "10px" }} />
                    <div>
                      <div style={{ fontWeight: "600" }}>Целевой сбор</div>
                      <div style={{ fontSize: "13px", color: "#6D7885" }}>
                        Когда есть определенная цель
                      </div>
                    </div>
                  </div>
                  <Icon28ChevronRightOutline
                    style={{
                      alignSelf: "center",
                      justifySelf: "flex-end",
                    }}
                  />
                </div>
              </Card>
            </CardGrid>
          </Group>

          <Group separator="hide">
            <CardGrid>
              <Card style={{ padding: '12px 16px' }}>
                <div>
                  <div style={{ fontWeight: "600" }}>Регулярный сбор</div>
                  <div style={{ fontSize: "13px", color: "#6D7885" }}>
                    Если помощь нужна ежемесячно
                  </div>
                </div>
                <Button
                  mode="primary"
                  onClick={() => {
                    this.props.changePanel("collection-form");
                    this.props.actPanelHeader.changeTitle("Регулярный сбор");
                  }}
                >
                  Подробнее
                </Button>
              </Card>
            </CardGrid>
          </Group>
        </div>
      </React.Fragment>
    );
  }
}

export default TypeCollection;
