import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Bro thought he could become the next rizz king by doing the uncanny ankha zone dance like a sussy baka in ohio💀dont bro know quandale dingle already did the forgis on the jeep thug shaker banban style with baller💀bro aint ever making it out of oklahoma the ocky way💀 that shit just plain uncanny like skibidi toilet bro💀 bro got negative infinity morbin chill bill pizza tower barbenheimer rizz bro💀bro got that nathaniel b ahh griddy bro💀bro really thought he had that rise of gru grimace shake 1 2 buckle my shoe spiderverse whopper rizz bro💀bro got that canon event baby gronk waffle house monday left me broken ahh drip in ohio bro💀 we aint ever makin it out of ohio with bros goofy ahh dj khaled mr chedda sisyphus toxic gossip train pikmin 4 ahh rizz bro💀 that aint even elephant mario titanic submarine god tier rizz bro💀thats just uncanny like shadow wizard money gang ambatukam twitter x bro💀fr bro💀
        </Text>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
