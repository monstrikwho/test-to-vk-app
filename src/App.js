import React from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import MainPanel from "./panels/main";
import TypeCollection from "./panels/typeCollection";
import CollectionForm from "./panels/collectionForm";
import AdditionPanel from "./panels/addition";
import FeedPanel from "./panels/feed";
import CreatePost from "./panels/createPost";
import Post from "./panels/post";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: "main",
      panelHeader: 'Name'
    };
  }
  changePanel = (panel) =>
    this.setState({
      activePanel: panel,
    });

  actPanelHeader = {
    changeTitle: (title) => {
      this.setState({
        panelHeader: title
      })
    },
    getTitle: () => this.state.panelHeader
  }

  render() {
    return (  
      <View activePanel={this.state.activePanel}>
        <Panel id="main">
          <MainPanel changePanel={this.changePanel} />
        </Panel>
        <Panel id="type-collection">
          <TypeCollection changePanel={this.changePanel} actPanelHeader={this.actPanelHeader} />
        </Panel>
        <Panel id="collection-form">
          <CollectionForm changePanel={this.changePanel} actPanelHeader={this.actPanelHeader} />
        </Panel>
        <Panel id="addition">
          <AdditionPanel changePanel={this.changePanel} actPanelHeader={this.actPanelHeader} />
        </Panel>
        <Panel id="create-post">
          <CreatePost changePanel={this.changePanel} actPanelHeader={this.actPanelHeader} />
        </Panel>
        <Panel id="feed">
          <FeedPanel changePanel={this.changePanel} actPanelHeader={this.actPanelHeader} />
        </Panel>
        <Panel id="post">
          <Post changePanel={this.changePanel} actPanelHeader={this.actPanelHeader} />
        </Panel>
      </View>
    );
  }
}

export default App;
