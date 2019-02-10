import React, { Component } from "react";
import "./App.css";

import AccountBookForm from "./components/AccountBookForm";
import AccountBookInfoList from "./components/AccountBookInfoList";

class App extends Component {
  // field
  currentId = 1;

  state = {
    list: [
      {
        id: 0,
        type: "지출",
        price: 3800,
        usage: "점심 식비",
        date: "2019. 1. 16 오후 1:12:33"
      },
      {
        id: 1,
        type: "수입",
        price: 20000,
        usage: "중고책 판매",
        date: "2019. 1. 18 오전 10:17:21"
      }
    ]
  };

  add = data => {
    const { list } = this.state;
    this.setState({
      list: list.concat({ id: ++this.currentId, ...data })
    });
  };

  remove = id => {
    const { list } = this.state;
    this.setState({
      list: list.filter(info => info.id !== id)
    });
  };

  update = (id, data) => {
    const { list } = this.state;
    this.setState({
      list: list.map(
        info =>
          id === info.id // 현재 수정하는 id를 찾음
            ? { ...info, ...data } // 새로운 내용(data)으로 덮어씀
            : info // 기존값 유지
      )
    });
  };

  render() {
    const { list } = this.state;
    return (
      <React.Fragment>
        <AccountBookForm onAdd={this.add} />
        <AccountBookInfoList
          list={list}
          onRemove={this.remove}
          onUpdate={this.update}
        />
      </React.Fragment>
    );
  }
}

export default App;
