import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styled, theme} from './stitches.config';

const StyledText = styled('Text', {
  fontSize: theme.fontSizes[3],
  color: theme.colors.blue500,
});

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <StyledText>Hello world</StyledText>
      </View>
    </SafeAreaView>
  );
};

export default App;
