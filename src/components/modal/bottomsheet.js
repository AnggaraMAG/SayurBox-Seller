import React, { Component } from "react";
import { View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default class bottomsheet extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <YourOwnComponent />
        </RBSheet>
      </View>
    );
  }
}
