import React from "react";
import NativeActionButton from "react-native-action-button";
import { Icon } from 'react-native-elements';

export default function ActionButton() {
  return (
    <NativeActionButton buttonColor="#ce2029" spacing={8}>
      <NativeActionButton.Item
        size={35}
        spaceBetween={5}
        buttonColor="#0c3866"
        title="Today's report"
        onPress={() => console.log("you pressed me!")}
      >
        <Icon name="assignment" color="#fff" />
      </NativeActionButton.Item>
      <NativeActionButton.Item
        size={35}
        spaceBetween={5}
        buttonColor="#0c3866"
        title="Student / Return Visit"
        onPress={() => console.log("you pressed me!")}
      >
        <Icon name="assignment" color="#fff" />
      </NativeActionButton.Item>
    </NativeActionButton>
  );
}
