import React from 'react';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { Container } from './styles';
import Routes from '~/routes';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Container />
    </>
  );
}

