import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
            }
        }, // A primeira é a que é carregada por Default (?)
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no GitHub',
            }
        },
    }, { 
            defaultNavigationOptions: { // configurações padrão
                headerTintColor: '#FFF',
                headerStyle: {  // Estilização do container do HEADER, no Raeact Native não tem herança de estilos
                                // os textos do container são elementos dentro do mesmo, por isso não herdam os atributos especificados em "headerStyle"
                    backgroundColor: '#7d40e7',
                }
        }
    })
);

export default Routes;