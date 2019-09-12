import React, { Component } from 'react'
import { Container, Top, Logo, Title } from './styles';
import { Text, View } from 'react-native';
import logo from '~/assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
    return (
      <Container>
        <Top>
          <Logo source={logo} />
          <Title>Helton Denis</Title>
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
      </Container>
    )
  }
