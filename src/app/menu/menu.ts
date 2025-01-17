import { CoreMenu } from '@core/types'
import { Role } from '../auth/models/role';

export const menu: CoreMenu[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    // translate: 'MENU.HOME',
    // role: [Role.SuperMonedas],
    type: 'item',
    icon: 'home',
    url: 'ifis/inicio',

  },
  {
    id: 'apps',
    type: 'section',
    title: 'Administración',
    // role: [Role.SuperMonedas],
    // translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      {
        id: 'cargaCreditosPre',
        title: 'Cargar créditos Pre Aprobados',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'user',
        url: 'cargar-creditos/preaprobados',
      },
      {
        id: 'operacionCreditosPre',
        title: 'Operación créditos preaprobados',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'solicitudCreditosPre',
            title: 'Solicitud de créditos Pre Aprobados',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: 'operacion-creditos-preaprobados/solicitud',
          },
        ]
      },
      {
        id: 'operacionCreditosEmp',
        title: 'Operación créditos empleados',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'solicitudCreditosEmo',
            title: 'Solicitud de créditos empleados',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: 'operacion-creditos-empleados/solicitud',
          },
        ]
      },
      {
        id: 'operacionCreditosAut',
        title: 'Operación créditos autónomos',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'solicitudCreditosPre',
            title: 'Solicitud de créditos autónomos',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: 'operacion-creditos-autonomos/solicitud',
          },
        ]
      },
      {
        id: 'solicitudesCreditos',
        title: 'Solicitudes créditos',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'user',
        url: 'solicitudes-creditos/solicitudes',
      },
    ]
  },
  {
    id: 'motorPrediciones',
    type: 'section',
    title: 'Motor de Predicciones',
    // role: [Role.SuperMonedas],
    // translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      {
        id: 'mdm',
        title: 'MDM Master Data Managment',
        // translate: 'MENU.PAGES.SECTION',
        type: 'collapsible',
        icon: 'file-text',
        children: [
          {
            id: 'prospectosclientes',
            title: 'Prospectos clientes',
            // translate: 'MENU.PAGES.AUTH.COLLAPSIBLE',
            type: 'collapsible',
            icon: 'circle',
            children: [
              {
                id: 'adminProspectosClientes',
                title: 'Admin Prospectos Clientes',
                // translate: 'MENU.PAGES.AUTH.LOGIN1',
                type: 'item',
                url: 'prospectos-clientes/list',
              },
            ]
          },
          {
            id: 'clientes',
            title: 'Clientes',
            // translate: 'MENU.OTHERS.LEVELS.SECOND1.COLLAPSIBLE',
            icon: 'circle',
            type: 'collapsible',
            children: [
              {
                id: 'personas',
                title: 'Personas',
                // translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD',
                type: 'collapsible',
                children: [
                  {
                    id: 'administrcionClientes',
                    title: 'Administración',
                    // translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD1',
                    icon: 'circle',
                    type: 'item',
                    url: '#'
                  },
                  {
                    id: 'transaccionesCompraClientes',
                    title: 'Transacciones de compra',
                    // translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD1',
                    icon: 'circle',
                    type: 'item',
                    url: '#'
                  },
                  {
                    id: 'generarTransacionClientes',
                    title: 'Generar transación',
                    // translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD1',
                    icon: 'circle',
                    type: 'item',
                    url: '#'
                  },
                ]
              },
              {
                id: 'negocios',
                title: 'Negocios',
                // translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD',
                type: 'collapsible',
                children: [
                  {
                    id: 'administracionNegocios',
                    title: 'Administración',
                    // translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD1',
                    icon: 'circle',
                    type: 'item',
                    url: '#'
                  },
                  {
                    id: 'transaccionCompraNegocios',
                    title: 'Transacciones de compra',
                    // translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD1',
                    icon: 'circle',
                    type: 'item',
                    url: '#'
                  },
                  {
                    id: 'generarTransacionNegocios',
                    title: 'Generar transación',
                    // translate: 'MENU.OTHERS.LEVELS.SECOND1.THIRD1',
                    icon: 'circle',
                    type: 'item',
                    url: '#'
                  },
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'mdp',
        title: 'MDP Master Data Products',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'administracionCategorias',
            title: 'Administración de categorias',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'administracionSubcategorias',
            title: 'Administración subcategorías',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'listadoProductos',
            title: 'Listado de productos',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'BuscarProductos',
            title: 'Buscar productos',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'actualizarStock',
            title: 'Actualizar Stock',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'reporteAbastecimiento',
            title: 'Reporte de abastecimiento',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'reporteStock',
            title: 'Reporte de stock',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'reporteCaducidadProductos',
            title: 'Reporte de caducidad de productos',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'reporteRotacionProductos',
            title: 'Reporte de rotación de productos',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
          {
            id: 'reporteRefil',
            title: 'Reporte de refil',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: '#',
          },
        ]
      },
      {
        id: 'operacionCreditosAut',
        title: 'MDO Motor de ofertas',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'solicitudCreditosPre',
            title: 'Solicitud de créditos autónomos',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: 'operacion-creditos-autonomos/solicitud',
          },
        ]
      },
    ]
  },

]
