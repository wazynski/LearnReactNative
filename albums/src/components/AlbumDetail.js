import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { thumbnailStyle, thumbnailContainerStyle, textContainer, textStyles, textBoldStyles } = styles;
  const { title, artist, thumbnail_image, image } = album;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textContainer}>
          <Text style={textBoldStyles}>{title}</Text>
          <Text style={textStyles}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image
            style={thumbnailStyle}
            source={{ uri: image }}
          />
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textStyles: {
    // fontSize: 10
  },
  textBoldStyles: {
    // fontSize: 10,
    fontWeight: 'bold'
  }
};

export default AlbumDetail;
