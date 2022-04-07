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
