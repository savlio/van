import { request } from '../request'



export function getOptionTypes(params: WorkflowOptionTypeFindParam) {
  return request<WorkflowOptionTypeView[]>({
    url: `/workflow/option/type/find`,
    method: 'GET',
    params,
  })
}

export function addOptionType(data: WorkflowOptionTypeAddParam) {
  return request<void>({
    url: `/workflow/option/type/add`,
    method: 'POST',
    data,
  })
}

export function updateOptionType(data: WorkflowOptionTypeUpdateParam) {
  return request<void>({
    url: `/workflow/option/type/update`,
    method: 'POST',
    data,
  })
}


export function getOptionValues(params: WorkflowOptionValueFindParam) {
  return request<WorkflowOptionValueView[]>({
    url: `/workflow/option/value/find`,
    method: 'GET',
    params,
  })
}

export function addOptionValue(data: WorkflowOptionValueAddParam) {
  return request<void>({
    url: `/workflow/option/value/add`,
    method: 'POST',
    data,
  })
}

export function updateOptionValue(data: WorkflowOptionValueUpdateParam) {
  return request<void>({
    url: `/workflow/option/value/update`,
    method: 'POST',
    data,
  })
}
