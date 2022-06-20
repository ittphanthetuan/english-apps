const ROOT = '';

const path = (sublink) => {
  return `${ROOT}${sublink}`
}

export const PATH_DASHBOARD = {
  root: ROOT,
  notfound: path('/404'),
  about: path('/about'),
  detail: path('/detail'),
  product: {
    list: path('/product'),
    create: path('/product/create'),
    edit: path('/product/:id/edit'),
    editWithParam: (id) => path(`/product/${id}/edit`),
  },
}