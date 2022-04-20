import service from "@/utils/axios";

/**
 *
 */
export function getDrivers(year: number) {
  return service.request({
    url: `/mock/drivers/${year}`,
    method: "get",
  });
}

/**
 *
 */
export function getDriver(params: any) {
  return service.request({
    url: "/mock/driver",
    method: "get",
    params,
  });
}

/**
 *
 */
export function getDriver2(params: any) {
  return service.request({
    url: "/mock/driver2",
    method: "get",
    params,
  });
}

/**
 *
 */
export function getTeams(year: number) {
  return service.request({
    url: `/mock/teams/${year}`,
    method: "get",
  });
}

/**
 *
 */
export function getSchedule() {
  return service.request({
    url: "/mock/schedule",
    method: "get",
  });
}
