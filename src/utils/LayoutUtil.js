import { LayoutProvider } from 'recyclerlistview';
import { Dimensions } from 'react-native';

   export const getLayoutProvider = (type) =>  {
      const getWindowWidth = Math.round(Dimensions.get('window').width * 1000) / 1000 - 6; 

    switch (type) {
      case 0:
        return new LayoutProvider(
          () => {
            return 'VSEL'; 
          },
          (type, dim, index) => {
            const columnWidth = getWindowWidth / 3;
            switch (type) {
              case 'VSEL':
                if (index % 3 === 0) {
                  dim.width = 3 * columnWidth;
                  dim.height = 300;
                } 
                break;
              default:
                dim.width = 0;
                dim.heigh = 0;
            }
          }
        );

    }
  }