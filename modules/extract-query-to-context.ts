import {ZuploContext, ZuploRequest} from "@zuplo/runtime";

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: never,
  policyName: string
) {
  context.custom.originalQuery = request.query;

  return request;
}